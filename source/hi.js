import mirror, {actions, connect, render} from 'mirrorx'
import React from 'react'

const o = {
	a: {
		b: {
			c: 'puppy'
		}
	}
}

const Hi = (props) => {
	return (<div>sup {o.a?.b?.c}</div>)
}

export default Hi;
