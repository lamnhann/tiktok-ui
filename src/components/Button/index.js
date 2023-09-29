import React, {Fragment} from 'react'
import myAlert from '~/myAlert'

const Button = () => {
  return (
    <Fragment>
        <button onClick={myAlert}>Click me !</button>
    </Fragment>
  )
}

export default Button