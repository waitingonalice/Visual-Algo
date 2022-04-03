import React from 'react'
import { GenerateButton } from '../components/Button'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
		<GenerateButton handleClick = {()=>navigate('/Visual')}>
			Back to Home page
		</GenerateButton>
		<div>
			ERROR! Page not found!
		</div>
    </div>
  )
}

export default ErrorPage