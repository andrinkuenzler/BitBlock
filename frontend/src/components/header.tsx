//src/components/header.tsx
import NextLink from "next/link"
import { Flex, useColorModeValue, Spacer, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react'

const siteTitle = "BitBlock"
export default function Header() {

  return (
    <Flex as='header' bg={useColorModeValue('gray.100', 'gray.900')} p={4} alignItems='center'>
      <LinkBox>
        <NextLink href={'/'} passHref>
          <LinkOverlay>
            <Heading size="md">{siteTitle}</Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
      <Spacer />
      <LinkBox>
        <NextLink href={'/create'} passHref>
          <LinkOverlay>
            <Heading size="sm">Create Event</Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
      <LinkBox ml={4}>
        <NextLink href={'/purchase'} passHref>
          <LinkOverlay>
            <Heading size="sm">Buy Ticket</Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
      <LinkBox ml={4}>
        <NextLink href={'/create'} passHref>
          <LinkOverlay>
            <Heading size="sm">Refund Ticket</Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </Flex>
  )
}