
import React,{PureComponent} from 'react'

export default class ScrollList extends PureComponent{
    constructor(props) {
        super(props)
        var that = this;
        this.onScroll = function (e) {
            if (e.target === that.scrollingContainer) {
                var scrollTop = e.target.scrollTop;
                that.setState({
                    scrollTop: scrollTop
                });
            }
        };
        this.renderDisplayContent = function () {
            var scrollTop = this.state.scrollTop;
            var _a = this.props, rowHeight = _a.rowHeight, rowRenderer = _a.rowRenderer, total = _a.total;
            var startIndex = Math.floor(scrollTop / rowHeight);
            var endIndex = Math.min(startIndex + this.limit(), total - 1);
            var content = [];
            for (var i = startIndex; i <= endIndex; i++) {
                content.push(rowRenderer({
                    index: i,
                    style: {
                        height: rowHeight,
                        left: 0,
                        right: 0,
                        position: "absolute",
                        top: i * rowHeight
                    }
                }));
            }
            return content;
        };
        this.limit = function () {
            var _a = this.props, rowHeight = _a.rowHeight, height = _a.height;
            return Math.ceil(height / rowHeight);
        }
        this.state = {
            scrollTop: 0
        }
    }
    render () {
        var that=this
        var _a = this.props, height = _a.height, total = _a.total, rowHeight = _a.rowHeight;
        return (React.createElement("div", { style: {
                overflowX: "hidden",
                overflowY: "auto",
                height: height
            }, onScroll: that.onScroll, ref: function (container) { return (that.scrollingContainer = container); } },
            React.createElement("div", { style: {
                    height: total * rowHeight,
                    position: "relative"
                } }, that.renderDisplayContent())));
    };
}