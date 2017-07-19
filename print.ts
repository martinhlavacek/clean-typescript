import ICode from './icode';

export default class Printer
{
	printer(code:ICode)
	{
		return "My code is: " + code.language;
	}
}

