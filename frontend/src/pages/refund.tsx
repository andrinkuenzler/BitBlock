// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "next/link"
import { VStack, Heading, Box, LinkOverlay, LinkBox } from "@chakra-ui/layout"
import { Text, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik';
import { useState, useEffect } from 'react'
import { ethers } from "ethers"

declare let window: any

const Refund: NextPage = () => {
  return (
    <>
      <Head>
        <title>BitBlock</title>
      </Head>

      <Heading as="h3" my={4}>Purchase</Heading>
      <VStack>
        <Box w='100%' my={4}>
          <Formik
            initialValues={{}}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {(props) => (
              <Form>
                <h4>Refund Ticket</h4>

                <FormControl>
                  <FormLabel>Event name:</FormLabel><br />
                  <Input name="eventNameRefund" type="text" value="" required />
                </FormControl>


                <FormControl>
                  <FormLabel>Number of tickets:</FormLabel><br />
                  <Input name="ticketQuantityRefund" type="number" min="1" max="1" value="1" required />
                </FormControl>
                <Button type="submit" name="send">Send</Button>
              </Form>
            )}
          </Formik>

        </Box>
      </VStack>
    </>
  )
}

export default Refund