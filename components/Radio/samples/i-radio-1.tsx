import {Module, RadioGroup} from '@ijstech/components';

export default class IRadioSample extends Module {
    private radioGroup: RadioGroup;

    init() {
        super.init();
        this.radioGroup.radioItems = [
            {caption: 'Option 1', value: '1'},
            {caption: 'Option 2', value: '2'},
            {caption: 'Option 3', value: '3'}
        ]
    }

    render() {
        return (
            <i-panel height="100%" width="100%" padding={{left: 10, right: 10, top: 10, bottom: 10}}>
                <i-radio-group width="100%" id='radioGroup' selectedValue="3"></i-radio-group>
            </i-panel>
        )
    }
}