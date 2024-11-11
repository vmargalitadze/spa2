'use client'
import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'


// 👉 Define the necessary props we need to render the component
type Props = {
  name: string
  id: string
  emailAddress?: string
  phone?: UserPublicMetadata
}

function UserRow({ name, id,  emailAddress }: Props) {
  // 👉 Set the initial state of `isBetaUser` based on the metadata
 

  // 👉 Calls the server action defined earlier and sets the state on change


  return (
    <TableRow>
      <TableCell className="flex flex-col">
        <span>{name}</span>
        <span className="text-xs italic text-gray-600">{id}</span>
      </TableCell>

      <TableCell>{emailAddress}</TableCell>

    
    </TableRow>
  )
}

export default UserRow