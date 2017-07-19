import Code from './code';
import ICode from './icode';
import Printer from './print';

function main()
{
	var code:ICode = new Code("typescript");
	var printer = new Printer();
	return printer.printer(code);
}

document.body.innerHTML = main();
