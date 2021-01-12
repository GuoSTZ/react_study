import React from 'react'
class Option extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onClick = () => {
            const { value, label } = this.props;
            this.props.onClick({
                value,
                label
            });
        };
    }
    render() {
        const { style, label } = this.props;
        return (React.createElement("li", { className: "large-select-option", style: style, onClick: this.onClick},
            React.createElement("span", { className: "large-select-option-value" }, label)));
    }
}
export default Option
