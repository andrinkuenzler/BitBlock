import React, { useState } from 'react';
import { Button, Input , NumberInput,  NumberInputField,  FormControl,  FormLabel } from '@chakra-ui/react'
import {ethers} from 'ethers'
import { Contract } from "ethers"
import { EventContractABI as ecABI} from 'abi/EventContractABI'
import { TransactionResponse,TransactionReceipt } from "@ethersproject/abstract-provider"

declare let window:any

interface Props {
    eventContract: string,
    currentAccount: string | undefined
}

export default function CreateEvent(props:Props){
  const eventContract = props.eventContract
  const currentAccount = props.currentAccount
  const [quantity,setQuantity]=useState<string>('100')
  const [price,setPrice]=useState<string>('100')
  const [eventname,setEventName]=useState<string>('100')

  async function createEvent(event:React.FormEvent) {
    event.preventDefault()

    if(!window.ethereum) return    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const evContr: Contract = new ethers.Contract(eventContract, ecABI, signer)

    evContr.createEvent(eventname.toString(), price, quantity)
      .then((tr: TransactionResponse) => {
        console.log(`TransactionResponse TX hash: ${tr.hash}`)
        tr.wait().then((receipt:TransactionReceipt)=>{console.log("transfer receipt",receipt)})
      })
      .catch((e:Error)=>console.log(e))
 }

  const handleChange = (value:string) => setQuantity(value)
  const handlePrice = (value:string) => setPrice(value)
  const handleEventName = (value:string) => setEventName(value)

  return (
    <form onSubmit={createEvent}>
    <FormControl>
      <FormLabel htmlFor='eventname'>Event name: </FormLabel>
      <Input id="eventname" type="text" required  onChange={handleEventName} my={3}/>
    <FormLabel htmlFor='quantity'>Quantity: </FormLabel>
      <NumberInput defaultValue={quantity} min={0} max={10000} onChange={handleChange}>
        <NumberInputField />
      </NumberInput>
    <FormLabel htmlFor='price'>Price: </FormLabel>
      <NumberInput defaultValue={price} min={0} max={10000} onChange={handlePrice}>
        <NumberInputField />
      </NumberInput>
      <Button type="submit" isDisabled={!currentAccount}>Transfer</Button>
    </FormControl>
    </form>
  )
}