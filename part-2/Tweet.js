const Tweet = (props) => {
	console.log(props);
	return (
		<ul className="tweet">
            <li>Name: {props.name}</li>
			<li>Username: {props.username}</li>
			<li>Date: {props.date}</li>
			<li>Message: {props.message}</li>
		</ul>
	);
};

//this is deconstructed
// function Tweet({ date, message, name, username }) {
//     return (
//       <div className="tweet">
//         <span>{name}</span>
//         <span className="username">{username}</span>
//         <span className="date">{date}</span>
//         <p>{message}</p>
//       </div>
//     );
//   }