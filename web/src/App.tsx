import { useState, useEffect } from 'react';
import axios from 'axios';

import * as Dialog from '@radix-ui/react-dialog';

import logoImage from './assets/logo-nlw-esports.svg';
import './styles/main.css';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal} from './components/CreateAdModal';

interface Game {
	id: string
	title: string
	banner: string
	_count: {
		Ads: number
	}
}

function App() {
	const [games, setGames] = useState<Game[]>([]);

	useEffect(() => {
		axios('http://127.0.0.1:3333/games').then(response => {
			setGames(response.data);
		})
	}, [])

	return (
		<div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
			<img src={logoImage} />

			<h1 className="text-6xl text-white font-bold mt-20">
				Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.
			</h1>

			<div className="grid grid-cols-6 gap-6 mt-16">
				{games.map(game => {
					return (
						<GameBanner
							key={game.id}
							title={game.title}
							bannerUrl={game.banner}
							adsCount={game._count.Ads}
						/>
					)
				})}
			</div>

			<Dialog.Root>
				<CreateAdBanner />

				<CreateAdModal />
			</Dialog.Root>


		</div>
	)
}

export default App
