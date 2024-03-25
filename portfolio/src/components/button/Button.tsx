import "./Button.scss"

function Button(props: any) {

  return (
    <div className="square">
      <p>
        {props.children}
      </p>
    </div>
  )
}

export default Button
