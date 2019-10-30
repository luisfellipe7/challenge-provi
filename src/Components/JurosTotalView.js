import React from 'react'
import JurosTotalCardContent from './JurosTotalCardContent'

class JurosTotalView extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div class="dash-view">
				<h2 class="view-heading">Juros total do emprestimo</h2>
				<JurosTotalCardContent />
			</div>
		);
	}
}

export default JurosTotalView