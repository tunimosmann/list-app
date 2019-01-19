import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			movie: "",
			series: "",
			drama: "",
			play: "",
			game: "",
			book: "",
			volunteer: 0,
			writeArticle: 0, 
			techEvent: 0
		}
	}

	// FUNCTIONS

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		if (this.state[event.target[0].id]) {

			//firebase

			//clear form and state 
			this.setState({
				[event.target[0].id]: ""
			})
		} else {
			alert(`Please add a ${event.target[0].id} title.`);
		}
	}

	addToCounter = (event => {
		event.preventDefault();

		this.setState({
			[event.target.id]: (this.state[event.target.id] + 1)
		})

		//firebase

	})

	//RENDER
	render() {
		return (
			<div className="App">
				<header className="header">
					<h1 className="header__h1 heading__h1"><span className="header__emoji emoji" aria-label="sparkles" role="img">✨</span>  My Tracking App! <span className="header__emoji emoji" aria-label="sparkles" role="img">✨</span></h1>
				</header>

				<main className="main">
					<section className="movies">
						<div className="movies__wrapper wrapper">
							<h2 className="movies__h2 heading__h2">Movies <span className="movies__emoji emoji" aria-label="Clapper Board" role="img">🎬</span></h2>

							<form onSubmit={this.handleSubmit} action="" className="movies__form form">
								<label htmlFor="movie" className="form__label visuallyhidden">Movie title.</label>
								<input
									type="text"
									className="form__field"
									onChange={this.handleChange}
									id="movie"
									value={this.state.movie}
									placeholder="Movie title"
								/>

								<input type="submit" className="form__submit button" value="Add movie." />
							</form>
						</div>
					</section>

					<section className="series">
						<div className="series__wrapper wrapper">
							<h2 className="series__h2 heading__h2">Series <span className="series__emoji emoji" aria-label="Television" role="img">📺</span></h2>

							<form onSubmit={this.handleSubmit} action="" className="series__form form">
								<label htmlFor="series" className="form__label visuallyhidden">Series title.</label>
								<input
									type="text"
									className="form__field"
									onChange={this.handleChange}
									id="series"
									value={this.state.series}
									placeholder="Series title"
								/>

								<input type="submit" className="form__submit button" value="Add series." />
							</form>
						</div>
					</section>

					<section className="dramas">
						<div className="dramas__wrapper wrapper">
							<h2 className="dramas__h2 heading__h2">Dramas <span className="dramas__emoji emoji" aria-label="Couple With Heart" role="img">💑</span></h2>

							<form onSubmit={this.handleSubmit} action="" className="dramas__form form">
								<label htmlFor="drama" className="form__label visuallyhidden">Drama title.</label>
								<input
									type="text"
									className="form__field"
									onChange={this.handleChange}
									id="drama"
									value={this.state.drama}
									placeholder="Drama title"
								/>

								<input type="submit" className="form__submit button" value="Add drama." />
							</form>
						</div>
					</section>

					<section className="theatre">
						<div className="theatre__wrapper wrapper">
							<h2 className="theatre__h2 heading__h2">Theatre <span className="theatre__emoji emoji" aria-label="Drama Masks" role="img">🎭</span></h2>

							<form onSubmit={this.handleSubmit} action="" className="theatre__form form">
								<label htmlFor="play" className="form__label visuallyhidden">Play title.</label>
								<input
									type="text"
									className="form__field"
									onChange={this.handleChange}
									id="play"
									value={this.state.play}
									placeholder="Play title"
								/>

								<input type="submit" className="form__submit button" value="Add play." />
							</form>
						</div>
					</section>

					<section className="games">
						<div className="games__wrapper wrapper">
							<h2 className="games__h2 heading__h2">Games <span className="games__emoji emoji" aria-label="Video Game" role="img">🎮</span></h2>

							<form onSubmit={this.handleSubmit} action="" className="games__form form">
								<label htmlFor="game" className="form__label visuallyhidden">Game title.</label>
								<input
									type="text"
									className="form__field"
									onChange={this.handleChange}
									id="game"
									value={this.state.game}
									placeholder="Game title"
								/>

								<input type="submit" className="form__submit button" value="Add game." />
							</form>
						</div>
					</section>

					<section className="books">
						<div className="books__wrapper wrapper">
							<h2 className="books__h2 heading__h2">Books <span className="books__emoji emoji" aria-label="Books" role="img">📚</span></h2>

							<form onSubmit={this.handleSubmit} action="" className="books__form form">
								<label htmlFor="book" className="form__label visuallyhidden">Book title.</label>
								<input
									type="text"
									className="form__field"
									onChange={this.handleChange}
									id="book"
									value={this.state.book}
									placeholder="Book title"
								/>

								<input type="submit" className="form__submit button" value="Add book." />
							</form>
						</div>
					</section>

					<section className="counters">
						<div className="counters__wrapper wrapper">
							<h2 className="counters__h2 heading__h2">Counters</h2>

							<div className="counters__item">
								<h3 className="counters__h3 heading__h3">Volunteered <span className="counters__emoji emoji" aria-label="Woman Technologist" role="img">👩‍💻</span></h3>
								<p className="counters__times">Counter: <span className="counters__span">{this.state.volunteer}</span></p>
								<input 
								type="submit" 
								value="I did it!" 
								className="counters__button button"
								id="volunteer"
								onClick={this.addToCounter}/>
							</div>

							<div className="counters__item">
								<h3 className="counters__h3 heading__h3">Wrote an Article <span className="counters__emoji emoji" aria-label="Pencil" role="img">✏️</span></h3>
								<p className="counters__times">Counter: <span className="counters__span">{this.state.writeArticle}</span></p>
								<input 
								type="submit" 
								value="I did it!" 
								className="counters__button button"
								id="writeArticle"
								onClick={this.addToCounter}/>
							</div>

							<div className="counters__item">
								<h3 className="counters__h3 heading__h3">Went to a Tech Event <span className="counters__emoji emoji" aria-label="Laptop computer" role="img">💻</span></h3>
								<p className="counters__times">Counter: <span className="counters__span">{this.state.techEvent}</span></p>
								<input 
								type="submit" 
								value="I did it!" 
								className="counters__button button"
								id="techEvent"
								onClick={this.addToCounter}/>
							</div>
						</div>
					</section>
				</main>
			</div>
		);
	}
}

export default App;
