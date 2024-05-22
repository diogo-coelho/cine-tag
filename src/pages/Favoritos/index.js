import Titulo from 'components/Titulo'
import styles from './Favoritos.module.css'

import Banner from 'components/Banner'
import Card from 'components/Card'

const Favoritos = () => {
	return (
		<>
			<Banner imagem="favoritos" />
			<Titulo>
				<h1>Meus favoritos</h1>
			</Titulo>
			<section className={styles.container}>

			</section>
		</>
	)
}

export default Favoritos