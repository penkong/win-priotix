// mount function
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { createBrowserHistory } from 'history'

const mount = (el: HTMLElement, { onNavigate, defaultHistory }: any) => {
	const history = defaultHistory
	if (onNavigate) history.listen(onNavigate)
	ReactDOM.render(<App history={history} />, el)
}

// isolation
if (process.env.NODE_ENV === 'development') {
	const history = createBrowserHistory()
	const devRoot = document.getElementById('_win')
	if (devRoot) mount(devRoot, { defaultHistory: history })
}

export { mount }
