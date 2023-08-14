import {Module} from '@ijstech/components';
export default class RangeSample extends Module{
    tipFormatter(value: any) {
        return `${Number(value).toFixed()}%`;
    }

    render() {
        return (
            <i-panel height="100%" width="100%" padding={{left: 10, right: 10, top: 10, bottom: 10}}>
                <i-range top={50} left={50} width='100%'
                    min={0} max={100} value={60} 
                    step={5} stepDots={5}
                    tooltipFormatter={this.tipFormatter}
                    tooltipVisible={true}
                />
            </i-panel>
        )
    }
}