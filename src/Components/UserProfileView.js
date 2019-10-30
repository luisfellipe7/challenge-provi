import React from 'react'

class UserProfileView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="user-profile">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ2wn18dnC8OmX7Qx49epjgoHREUBHEviB10griBGemOmkYQoK5g"
					id="profile-pic"
				/>
				<h3 id="display-name">{this.props.username}</h3>
				<p class="subtitle">{this.props.usertitle}</p>
			</div>
		);
	}
}

export default UserProfileView