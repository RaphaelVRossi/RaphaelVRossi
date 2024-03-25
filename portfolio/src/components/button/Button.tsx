import "./Button.scss"

function Button(props: any) {

  return (
    <a className="square-button" href={props.href}>
      <p> {props.children} </p>
    </a>
  )
}

export default Button
