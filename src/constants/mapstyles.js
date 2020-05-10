// use an override model with the default style in case some style options are missing
const mergeIntoDefault = style => Object.assign({}, Plain, style);

export const Plain = {
	className: 'plain',
	fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
	fontSize: '13px',
	stroke: 'black',
	pipelineArrowStroke: 'black',
	evolutionSeparationStroke: 'black',
	pipelineArrowHeight: '5',
	pipelineArrowWidth: '5',
	strokeWidth: '1',
	strokeDasharray: '2,2',
	anchor: {
		fontSize: '14px',
	},
	component: {
		fill: 'white',
		stroke: 'black',
		evolved: 'red',
		evolvedFill: 'white',
		strokeWidth: '1',
		pipelineStrokeWidth: '2',
		radius: 5,
		textColor: 'black',
		textOffset: 8,
		evolvedTextColor: 'red',
	},
	link: {
		stroke: 'grey',
		strokeWidth: 1,
		evolvedStroke: 'red',
		evolvedStrokeWidth: 1,
		flow: '#99c5ee9e',
		flowStrokeWidth: 10,
	},
	annotations: {
		stroke: '#595959',
		strokeWidth: 2,
		fill: 'white',
		text: 'black',
		boxStroke: '#595959',
		boxStrokeWidth: 1,
		boxFill: '#FFFFFF',
		boxTextColour: 'black',
	},
};

export const Handwritten = mergeIntoDefault({
	className: 'handwritten',
	fontFamily: '"Gloria Hallelujah", cursive',
	stroke: 'black',
	pipelineArrowStroke: 'black',
	evolutionSeparationStroke: 'black',
	pipelineArrowHeight: '5',
	pipelineArrowWidth: '5',
	strokeWidth: '1',
	strokeDasharray: '2,2',
	component: {
		fill: 'white',
		stroke: 'black',
		evolved: 'red',
		evolvedFill: 'white',
		strokeWidth: '1',
		pipelineStrokeWidth: '2',
		radius: 5,
		textColor: 'black',
		textOffset: 8,
		evolvedTextColor: 'red',
	},
	link: {
		stroke: 'grey',
		strokeWidth: 1,
		evolvedStroke: 'red',
		evolvedStrokeWidth: 1,
		flow: '#99c5ee9e',
		flowStrokeWidth: 10,
	},
	annotations: {
		stroke: '#595959',
		strokeWidth: 2,
		fill: 'white',
		text: 'black',
		boxStroke: '#595959',
		boxStrokeWidth: 1,
		boxFill: '#FFFFFF',
		boxTextColour: 'black',
	},
});

export const Wardley = mergeIntoDefault({
	className: 'wardley',
	fontFamily: 'Consolas, Lucida Console, monospace',
	stroke: 'black',
	pipelineArrowStroke: 'black',
	evolutionSeparationStroke: '#b8b8b8',
	pipelineArrowHeight: '5',
	pipelineArrowWidth: '5',
	strokeWidth: '1',
	strokeDasharray: '2,2',
	component: {
		fill: 'white',
		stroke: 'black',
		evolved: 'red',
		evolvedFill: 'white',
		strokeWidth: '1',
		pipelineStrokeWidth: '2',
		radius: 5,
		textColor: 'black',
		textOffset: 8,
		evolvedTextColor: 'red',
	},
	link: {
		stroke: 'grey',
		strokeWidth: 1,
		evolvedStroke: 'red',
		evolvedStrokeWidth: 1,
		flow: '#99c5ee9e',
		flowStrokeWidth: 10,
	},
	annotations: {
		stroke: '#595959',
		strokeWidth: 2,
		fill: 'white',
		text: 'black',
		boxStroke: '#595959',
		boxStrokeWidth: 1,
		boxFill: '#FFFFFF',
		boxTextColour: 'black',
	},
});

export const Colour = mergeIntoDefault({
	className: 'colour',
	fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
	stroke: '#c23667',
	pipelineArrowStroke: '#8cb358',
	evolutionSeparationStroke: '#b8b8b8',
	pipelineArrowHeight: '5',
	pipelineArrowWidth: '5',
	strokeWidth: '3',
	strokeDasharray: '2,2',
	component: {
		fill: 'white',
		stroke: '#8cb358',
		evolved: '#ea7f5b',
		evolvedFill: 'white',
		strokeWidth: '2',
		pipelineStrokeWidth: '2',
		radius: 7,
		textColor: '#486b1a',
		textOffset: 8,
		evolvedTextColor: '#ea7f5b',
	},
	link: {
		stroke: '#5c5c5c',
		strokeWidth: 1,
		evolvedStroke: '#ea7f5b',
		evolvedStrokeWidth: 1,
		flow: '#99c5ee9e',
		flowStrokeWidth: 10,
	},
	annotations: {
		stroke: '#015fa5',
		strokeWidth: 2,
		fill: '#99c5ee',
		text: 'black',
		boxStroke: '#015fa5',
		boxStrokeWidth: 2,
		boxFill: '#99c5ee',
		boxTextColour: 'black',
	},
});
