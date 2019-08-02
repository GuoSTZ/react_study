import React from 'react'
import {Row,Col,Button} from 'antd'

export default class GridDemo extends React.PureComponent{
	render(){
		return(
			<Row type="flex" justify="space-between">
				<Col>
					<Button type="primary">test1</Button>
					<Button type="primary">test2</Button>
					<Button type="primary">test3</Button>
					<Button type="primary">test4</Button>
				</Col>
				<Col>
					<Button type="primary">test5</Button>
					<Button type="primary">test6</Button>
					<Button type="primary">test7</Button>
				</Col>
			</Row>	
		)
	}
}