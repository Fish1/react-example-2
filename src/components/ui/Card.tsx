import classes from "./Card.module.css"

function Card(props: { children: JSX.Element | JSX.Element[]}) {
  return(
    <div className={classes.card}>{props.children}</div>
  )
}

export default Card;