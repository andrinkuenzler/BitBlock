import React, { useEffect,useState } from 'react';
import { Text, Button, Input , NumberInput,  NumberInputField,  FormControl,  FormLabel } from '@chakra-ui/react'
import {ethers} from 'ethers'
import { Contract } from "ethers"
import {parseEther } from 'ethers/lib/utils'
import { EventContractABI as ecABI, ERC20ABI as ercABI} from 'abi/EventContractABI'
import { TransactionResponse,TransactionReceipt } from "@ethersproject/abstract-provider"

declare let window:any

interface Props {
    eventContract: string,
    currentAccount: string | undefined
}

export default function BuyTicket(props:Props){
  const eventContract = props.eventContract
  const currentAccount = props.currentAccount
  const [quantity,setQuantity]=useState<string>('100')
  const [eventname,setEventName]=useState<string>('100')

  async function buyTicket(event:React.FormEvent) {
    event.preventDefault()

    if(!window.ethereum) return    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const evContr: Contract = new ethers.Contract(eventContract, ecABI, signer)

    evContr.buyTicket()
      .then((tr: TransactionResponse) => {
        console.log(`TransactionResponse TX hash: ${tr.hash}`)
        tr.wait().then((receipt:TransactionReceipt)=>{console.log("transfer receipt",receipt)})
      })
      .catch((e:Error)=>console.log(e))
 }

  const handleChange = (value:string) => setQuantity(value)
  const handleEventName = (value:string) => setEventName(value)

  return (
    <form onSubmit={buyTicket}>
    <FormControl>
      <FormLabel htmlFor='eventname'>Event name: </FormLabel>
      <Input id="eventname" type="text" required  onChange={handleEventName} my={3}/>
    <FormLabel htmlFor='quantity'>Quantity: </FormLabel>
      <NumberInput defaultValue={quantity} min={0} max={10000} onChange={handleChange}>
        <NumberInputField />
      </NumberInput>
      <Button type="submit" isDisabled={!currentAccount}>Transfer</Button>
    </FormControl>
    </form>
  )
}