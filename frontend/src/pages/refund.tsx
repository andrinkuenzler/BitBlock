// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import { VStack, Heading, Box } from "@chakra-ui/layout"
import RefundTicket from "components/RefundTicket"

declare let window: any

const Refund: NextPage = () => {
  return (
    <>
      <Head>
        <title>BitBlock</title>
      </Head>

      <Heading as="h3" my={4}>Purchase</Heading>
      <VStack>
        <Box  mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4}  fontSize='xl'>Refund Classtoken</Heading>
          <RefundTicket 
            eventContract='0x5FbDB2315678afecb367f032d93F642f64180aa3'
            currentAccount={currentAccount}
          />
        </Box>
      </VStack>
    </>
  )
}

export default Refund