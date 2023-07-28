'use client'

import { useState } from 'react'

interface IToggleElement {
  visibility: boolean;
  toggleElement: () => void;
}

export function useToggleElement(initialVisibility: false): IToggleElement {
  const [ visibility, setVisibility ] = useState<boolean>(initialVisibility);
  
  function toggleElement() {
    setVisibility((oldVisibility: boolean) => !oldVisibility)
  }

  return {
    visibility,
    toggleElement
  }
}