const pokemonsList = document.getElementById('pokemons-list');

pokemonsList.addEventListener('click', async e => {
  if (e.target.dataset.id !== undefined) {
    const request = await fetch(`/delete-pokemon/${e.target.dataset.id}`, {
      method: 'delete'
    });
    const data = await request.json();
    if (!data.error) {
      location.reload();
    }
  }
});
