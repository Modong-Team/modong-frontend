import Colors from './colors';

export class Styles {
	static stickyIndicatorAndNavigator = 'position:sticky; top:10rem; height:fit-content;';
	static headerHeight = '8rem';
	static sidebarWidth = '22rem';
	static dropDownAlignLeft = '>div{width:9.2rem;}';
	static dropDownOptionRed = `color:${Colors.red500}; &:hover{background-color:${Colors.red100};}`;
	static dropDownAlignRightBottom = 'left:unset; transform:unset; right:0; bottom:0;';
}
