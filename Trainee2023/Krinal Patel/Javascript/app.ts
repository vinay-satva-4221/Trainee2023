
import { MaskedTextBox } from '@syncfusion/ej2-inputs';

// Render the Masked Textbox
 let mask: MaskedTextBox = new MaskedTextBox({
     placeholder: 'IP Address (ex: 212.212.111.222)',
     floatLabelType: 'Always',
     mask: '[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]'
});
mask.appendTo('#income');