import React, { useEffect,useState } from 'react';
import { Select, Button, Input , NumberInput,  NumberInputField,  FormControl,  FormLabel } from '@chakra-ui/react'
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

export default function RefundTicket(props:Props){
  const eventContract = props.eventContract
  const currentAccount = props.currentAccount
  const [quantity,setQuantity]=useState<string>('100')

  async function returnTicket(event:React.FormEvent) {
    event.preventDefault()

    if(!window.ethereum) return    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const evContr: Contract = new ethers.Contract(eventContract, ecABI, signer)

    evContr.returnTicket(quantity)
      .then((tr: TransactionResponse) => {
        console.log(`TransactionResponse TX hash: ${tr.hash}`)
        tr.wait().then((receipt:TransactionReceipt)=>{console.log("transfer receipt",receipt)})
      })
      .catch((e:Error)=>console.log(e))
 }

  const handleChange = (value:string) => setQuantity(value)

  return (
    <form onSubmit={returnTicket}>
    <FormControl>
      <FormLabel htmlFor='quantity'>Quantity: </FormLabel>
      <NumberInput defaultValue={quantity} min={0} max={10000} onChange={handleChange}>
        <NumberInputField />
      </NumberInput>
      <Button type="submit" isDisabled={!currentAccount}>Transfer</Button>
    </FormControl>
    </form>
  )
}