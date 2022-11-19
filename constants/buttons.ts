import Colors from './colors';
import Fonts from './fonts';

export class ButtonSizes {
	static xsmall = 'xsmall';
	static small = 'small';
	static medium = 'medium';
	static large = 'large';
}

export class Buttons {
	static xsmall = `padding:0.4rem 0.8rem; border:0.1rem solid transparent; border-radius:0.6rem; ${Fonts.button12bold} line-height:normal;`;
	static small = `padding:0.8rem 1.6rem; border:0.1rem solid transparent; border-radius:0.8rem; ${Fonts.button12bold} line-height:normal;`;
	static medium = `padding:1rem 1.6rem; border:0.1rem solid transparent; border-radius:0.8rem; ${Fonts.button14bold} line-height:normal;`;
	static mediumLine = `padding:1rem 2rem 1rem 1.57rem; border:0.1rem solid transparent; border-radius:0.8rem; ${Fonts.button14medium} line-height:normal;`;
	static large = `padding:1.4rem 2rem; border:0.1rem solid transparent; border-radius:0.8rem; ${Fonts.button14bold} line-height:normal;`;
	static [key: string]: string;
}

export class ButtonTypes {
	static primary = 'primary';
	static secondary = 'secondary';
	static line = 'line';
	static red = 'red';
}

export class PrimaryStates {
	static normal = `background-color:${Colors.blue500}; color:${Colors.white};`;
	static hover = `background-color:${Colors.blue700}; color:${Colors.white};`;
	static active = `background-color:${Colors.blue900}; color:${Colors.white};`;
	static disabled = `background-color:${Colors.gray300}; color:${Colors.white};`;
}

export class SecondaryStates {
	static normal = `background-color:${Colors.gray200}; color:${Colors.gray950};`;
	static hover = `background-color:${Colors.gray300}; color:${Colors.gray950};`;
	static active = `background-color:${Colors.gray400}; color:${Colors.white};`;
	static disabled = `background-color:${Colors.gray300}; color:${Colors.white};`;
}

export class LargeLineStates {
	static normal = `background-color:${Colors.white}; color:${Colors.gray950}; border-color:${Colors.gray200};`;
	static hover = `background-color:${Colors.gray100}; color:${Colors.gray950}; border-color:${Colors.gray200};`;
	static active = `background-color:${Colors.gray200}; color:${Colors.gray950}; border-color:${Colors.gray300};`;
}

export class MediumLineStates {
	static normal = `background-color:${Colors.white}; color:${Colors.gray800}; border-color:${Colors.gray200};`;
	static hover = `background-color:${Colors.gray100}; color:${Colors.gray800}; border-color:${Colors.gray200};`;
	static active = `background-color:${Colors.gray200}; color:${Colors.gray800}; border-color:${Colors.gray300};`;
}

export class CommonLineStates {
	static disabled = `background-color:${Colors.gray300}; color:${Colors.white}; border-color:${Colors.gray400};`;
}

export class RedStates {
	static normal = `background-color:${Colors.red500}; color:${Colors.white};`;
	static hover = `background-color:${Colors.red700}; color:${Colors.white};`;
	static active = `background-color:${Colors.red900}; color:${Colors.white};`;
	static disabled = `background-color:${Colors.gray300}; color:${Colors.white};`;
}
