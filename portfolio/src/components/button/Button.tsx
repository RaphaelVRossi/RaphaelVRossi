import "./Button.scss"

function Button(props: any) {

  return (
    <a className="square-button" href={props.href}>
        {props.children}
    </a>
  )
}

export default Button
