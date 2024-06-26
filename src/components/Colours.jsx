'use client'

import React, { useState } from 'react'

const colours = {
  'Hope for Justice Red': {
    Primary: '#d6001c',
    'Tint 1': '#de3d52',
    'Tint 2': '#e57a88',
    'Tint 3': '#edb7be',
  },
  'Hope for Justice Yellow': {
    Primary: '#F79429',
    'Tint 1': '#F3C05D',
    'Tint 2': '#F0D193',
    'Tint 3': '#FFF5E0',
  },
  'Hope for Justice Black': {
    Primary: '#1c2122',
    'Tint 1': '#646768',
    'Tint 2': '#acaeae',
    'Tint 3': '#FAFAFA',
  },
}

function Colour({ name, shades }) {
  const [copiedShade, setCopiedShade] = useState(null)

  const handleCopy = (shadeValue) => {
    navigator.clipboard.writeText(shadeValue).then(() => {
      setCopiedShade(shadeValue)
      setTimeout(() => setCopiedShade(null), 2000) // Hide the "Copied!" message after 2 seconds
    })
  }

  return (
    <div style={{ position: 'relative', marginBottom: '20px' }}>
      <h3 className="text-sans not-prose text-xl font-bold text-neutral-900">
        {name}
      </h3>
      <ul className="flex list-none gap-2 p-0">
        {Object.entries(shades).map(([shadeName, shadeValue]) => (
          <li
            key={shadeName}
            className="relative flex cursor-pointer flex-col p-0 text-sm"
            onClick={() => handleCopy(shadeValue)}
          >
            {copiedShade === shadeValue && (
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-2xl bg-neutral-900 px-2 py-1 font-bold leading-none text-white">
                Copied!
              </div>
            )}
            <div
              style={{ backgroundColor: shadeValue }}
              className="mb-2 h-14 w-20 rounded-md"
            ></div>
            <span className="font-bold leading-tight">{shadeName}</span>
            <span className="cursor-pointer leading-tight text-neutral-400">
              {shadeValue}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Colours() {
  return (
    <div>
      {Object.entries(colours).map(([name, shades]) => (
        <Colour key={name} name={name} shades={shades} />
      ))}
    </div>
  )
}
