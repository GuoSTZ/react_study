import React from 'react';
import Option_1 from './Option';
import react_scroll_list_1 from './scroll-list';
import throttle from 'lodash.throttle';
import 'react-large-select/dist/index.css';
import './index.less';
const containerHeight = 256;
class LargeSelect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.hide = () => {
      this.setState({
        open: false,
        inputValue: '',
        showList: this.props.list
      });
    };
    this.toggle = e => {
      if (e.target !== this.input) {
        const {open} = this.state;
        this.setState({
          open: !open
        });
        if (open) {
          this.input.blur();
          this.hide();
        } else {
          this.input.focus();
        }
      }
    };
    this.globalClick = e => {
      if (!this.containerNode.contains(e.target)) {
        this.hide();
      }
    };
    this.onChange = o => {
      if (o.label !== this.state.selectValue) {
        this.setState({
          selectValue: o.label
        });
        this.props.onChange(o.value);
      }
    };
    this.rowRenderer = ({index, style}) => {
      const {label, value} = this.state.showList[index];
      return React.createElement(Option_1, {
        key: index + label,
        style: style,
        onClick: this.onChange,
        label: label,
        value: value
      });
    };
    this.filterList = val => {
      val = val.toLowerCase();
      this.setState({
        showList: this.props.list.filter(item =>
          item.label.toLowerCase().includes(val)
        )
      });
    };
    this.onInputChange = e => {
      const inputValue = e.target.value;
      this.setState({
        inputValue
      });
      this.filterList(inputValue);
    };
    this.clearSelectVal = e => {
      e.stopPropagation();
      this.hideClear();
      this.onChange({
        label: '',
        value: ''
      });
    };
    this.showClear = () => {
      const {selectValue, open} = this.state;
      this.setState({
        clearVisible: !open && !!selectValue
      });
    };
    this.hideClear = () => {
      this.setState({
        clearVisible: false
      });
    };
    this.mapPropstoState = props => {
      let selectValue = '';
      if (props.value) {
        const item = props.list.find(item => item.value === props.value);
        if (item) {
          selectValue = item.label;
        }
      }
      this.setState({
        showList: props.list,
        selectValue
      });
    };
    this.state = {
      open: false,
      selectValue: '',
      showList: [],
      inputValue: '',
      clearVisible: false
    };
    this.filterList = throttle(this.filterList.bind(this), 300);
  }
  componentWillReceiveProps(nextProps) {
    this.mapPropstoState(nextProps);
  }
  componentDidMount() {
    this.mapPropstoState(this.props);
    document.addEventListener('click', this.globalClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.globalClick);
  }
  render() {
    const {open, selectValue, showList, inputValue, clearVisible} = this.state;
    const {style, placeholder, className} = this.props;
    let selectedCls = 'large-select-select-value';
    if (!selectValue && placeholder) {
      selectedCls = selectedCls + ' large-select-select-placeholder';
    }
    let containerCls = open
      ? 'large-select-container-highlight'
      : 'large-select-container';
    if (className) {
      containerCls = containerCls + ' ' + className;
    }
    return React.createElement(
      'div',
      {
        className: containerCls,
        onClick: this.toggle,
        onMouseOver: this.showClear,
        onMouseLeave: this.hideClear,
        ref: c => (this.containerNode = c),
        style: style
      },
      React.createElement('input', {
        type: 'text',
        className: 'large-select-search-input',
        ref: i => (this.input = i),
        onChange: this.onInputChange,
        value: inputValue
      }),
      React.createElement(
        'div',
        {
          className: selectedCls,
          style: {visibility: open ? 'hidden' : 'visible'}
        },
        React.createElement('span', null, selectValue || placeholder)
      ),
      React.createElement(
        'ul',
        {
          className: 'large-select-option-list',
          style: {height: open ? containerHeight : 0}
        },
        React.createElement(react_scroll_list_1, {
          key: new Date().valueOf(),
          height: containerHeight,
          rowHeight: 32,
          total: showList.length,
          rowRenderer: this.rowRenderer
        })
      ),
      React.createElement('span', {
        className: 'large-select-arrow'
      })
    );
  }
}
LargeSelect.Option = Option_1;
LargeSelect.defaultProps = {
  placeholder: ''
};
export default LargeSelect;
