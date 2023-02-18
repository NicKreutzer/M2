export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={() => props.onSearch("You do not have the permits to add.")}>Agregar</button>
      </div>
   );
}
