import '../styles/BoxWrap.css'

export function TextBox({children}) {
	return (
		<div className='boxWrap'>
			<div className='box'>
				{children}
			</div>
		</div>
	)
}