const KeypointItem = ({title, text}) => {
  return (
    <div className='bg-zinc-100 min-w-[20rem] max-w-[25rem] min-h-[15rem] p-8 rounded-lg flex flex-col gap-5 shadow-lg transition-transform hover:scale-105'>
      <h2 className='bg-zinc-100 text-xl font-semibold text-black'>{title}</h2>
      <p className='bg-zinc-100 text-black text-lg'>{text}</p>
    </div>
  )
}

export default KeypointItem;

