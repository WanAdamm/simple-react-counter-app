    interface Props {
    count: Number;
}

const Counter = ({count}: Props) => {
  return (
    <div className="display-1">{count.toString()}</div>
  )
}

export default Counter