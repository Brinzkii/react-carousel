import { useState } from 'react';
import './Carousel.css';
import Card from './Card';
import { ArrowRightCircle, ArrowLeftCircle } from 'react-bootstrap-icons';

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
	const [currCardIdx, setCurrCardIdx] = useState(0);

	const currCard = photos[currCardIdx];
	const total = photos.length;

	//Increments currCardIdx state by 1
	function goForward() {
		currCardIdx === total - 1 ? setCurrCardIdx(0) : setCurrCardIdx(currCardIdx + 1);
	}

	//Decrements currCardIdx state by 1
	function goBackward() {
		currCardIdx === 0 ? setCurrCardIdx(total - 1) : setCurrCardIdx(currCardIdx - 1);
	}

	return (
		<div className="Carousel">
			<h1>{title}</h1>
			<div className="Carousel-main">
				<ArrowLeftCircle className="leftArrow" onClick={goBackward} />
				<Card caption={currCard.caption} src={currCard.src} currNum={currCardIdx + 1} totalNum={total} />
				<ArrowRightCircle className="rightArrow" onClick={goForward} />
			</div>
		</div>
	);
}

export default Carousel;
