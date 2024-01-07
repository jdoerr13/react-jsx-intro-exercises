const MAX_NAME_LENGTH_TO_SHOW = 6;

const Person = (props) => {

 const voteAge = props.age >= 18 ? "Go vote" : "Go study";

 const hobbiesLIs = props.hobbies.map(hobby => <li>{hobby}</li>);


    return (
      <div>
        <p>
         Learn some information about this person:
        </p>
            <ul>
                <li>Name: {props.name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                <li>Age: {props.age}</li>
                <ul>Hobbies:{hobbiesLIs}
        </ul>
            </ul>

            <h3>{voteAge}</h3>
      </div>
    );
  }
