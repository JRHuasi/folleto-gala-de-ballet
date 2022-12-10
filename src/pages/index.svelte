<script>
	import { metatags } from '@roxi/routify'
	import {fade} from 'svelte/transition'

	import Fa from 'svelte-fa';
	import { faTimes, faArrowLeft, faArrowRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

	metatags.title = 'GALA DE BALLET 2022'
	metatags.description = 'Claudia Ayusa - Estudio de Danza Clásica'

	const carouselPhotos = [
		'/imagenes/imagen_0.jpg',
		'/imagenes/imagen_1.jpg',
		'/imagenes/imagen_2.jpg',
		'/imagenes/imagen_3.jpg',
		'/imagenes/imagen_4.jpg',
		'/imagenes/imagen_5.jpg',
		'/imagenes/imagen_6.jpg',
		'/imagenes/imagen_7.jpg',
		'/imagenes/imagen_8.jpg',
		'/imagenes/imagen_9.jpg',
		'/imagenes/imagen_a.jpg',
		'/imagenes/imagen_b.jpg',
		'/imagenes/imagen_c.jpg',
	]

  let index = 0
	
	const next = () => {
		index = (index + 1) % carouselPhotos.length
	}

	const prev = () => {
    index = (index - 1 + carouselPhotos.length) % carouselPhotos.length
	}

	$: console.log({index})

</script>

<div class="cuadro">
	{#each [carouselPhotos[index]] as src (index)}
		<img transition:fade {src} alt="" />	
	{/each}
	<div id="cursores">
		<div class="flecha izquierda" on:click={prev}>
			<Fa icon={faAngleLeft}/>
		</div>
		<div class="flecha derecha" on:click={next}>
			<Fa icon={faAngleRight}/>
		</div>
	</div>
</div>
