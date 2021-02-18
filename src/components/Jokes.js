const Jokes = ({ data }) => {
    return (
        <div className='container'>
            <ul>
            {data
              .map(j => (
                <li key={j.id}>
                  <h3>{j.joke}</h3>
                </li>
              ))}
          </ul>
        </div>
    )
}

export default Jokes
