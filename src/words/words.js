import './words.css';

function Length4(props) {
	const single = props.simplified == props.traditional;
	const length = props.simplified.length;
	const suffix = single ? `single-${length}` : `${length}`;
	return (
		<div class="text" id="word">
			<p class={`simp simp-margin-${suffix} text-size-${suffix}`}>
				{props.simplified}
			</p>
			{!single ? <p class={`comp comp-margin-${suffix} text-size-${suffix}`}>
				<strong>
					{props.traditional}
				</strong>
			</p> : <div/>
			}
			<div class={`width-${suffix}`}>
				<p class="pinyin">
					<strong>
						{props.pinyin}
					</strong>
				</p>
			</div>
			<div class={`trans trans-margin-${suffix}`}>
				<em>
					{props.trans}
				</em>
			</div>
		</div>
	);
}

function Length3(props) {
	if (props.simplified != props.traditional) {
		return (
			<div class="text" id="word3">
				<p class="simp simp-margin-3 text-size-3">
					{props.simplified}
				</p>
				<p class="comp comp-margin-3 text-size-3">
					<strong>
						{props.traditional}
					</strong>
				</p>
				<div class="width3">
					<p class="pinyin">
						<strong>
							{props.pinyin}
						</strong>
					</p>
				</div>
				<div class="trans trans-margin-3">
					<em>
						{props.trans}
					</em>
				</div>
			</div>
		)
	} else {
		<div class="text" id="word-single-3">
			<p class="simp simp-single-margin-3 text-size-single-3">
				{props.simplified}
			</p>
			<div class="width-single-3">
				<p class="pinyin">
					<strong>
						{props.pinyin}
					</strong>
				</p>
			</div>
			<div class="trans trans-single-margin-3">
				<em>
					{props.trans}
				</em>
			</div>
		</div>
	}
}

function Words(props) {
	const single = props.simplified == props.traditional;
	const length = props.simplified.length;
	const suffix = single ? `single-${length}` : `${length}`;
	return (
		<div class="text container" id="word">
			<p class={`simp simp-margin-${suffix} text-size-${suffix}`}>
				{props.simplified}
			</p>
			{!single ? <p class={`comp comp-margin-${suffix} text-size-${suffix}`}>
				<strong>
					{props.traditional}
				</strong>
			</p> : <div/>
			}
			<div class={`width-${suffix}`}>
				<p class="pinyin">
					<strong>
						{props.pinyin}
					</strong>
				</p>
			</div>
			<div class={`trans trans-margin-${suffix}`}>
				<em>
					{props.trans}
				</em>
			</div>
		</div>
	);
}

export default Words;
