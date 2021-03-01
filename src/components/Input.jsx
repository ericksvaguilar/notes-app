import React from 'react'

export function Input() {
  function handleChange({ target }) {}

  return (
    <div>
      <input type='text' onChange={handleChange} />
    </div>
  )
}
