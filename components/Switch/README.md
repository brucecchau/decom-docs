# Switch 

Use switch for switching between on-off state or any two states when you toggle it.

### `i-switch`

## Class Inheritance
Inherited from [`Control`](components/Control/README.md)

## Properties

| Name                 | Description                                            | Type       | Default |
| ---------------      | -------------------------------------------------      | ---------- | ------- |
| checkedThumbColor    | Define the thumb color when the `<i-switch>` checked   | string     |         |
| uncheckedThumbColor  | Define the thumb color when the `<i-switch>` unchecked | string     |         |
| checkedThumbText     | Define the thumb text when the `<i-switch>` checked    | string     |         |
| uncheckedThumbText   | Define the thumb text when the `<i-switch>` unchecked  | string     |         |
| checkedTrackColor    | Define the track color when the `<i-switch>` checked   | string     |         |
| uncheckedTrackColor  | Define the track color when the `<i-switch>` unchecked | string     |         |
| checkedText          | Define the text when the `<i-switch>` checked          | string     |         |
| uncheckedText        | Define the text when the `<i-switch>` unchecked        | string     |         |
| checked              | Define that an `<i-switch>` is checked                 | boolean    |         |

## Event
| **onChanged**  |                                                |
| -------------- | ---------------------------------------------- |
| Description    | Callback executed when switch changed          |
| Signature      | onChanged(target: Control, event: Event)       |

## Sample Code

### Properties
```typescript(components/Switch/samples/i-switch_1.tsx)
render() {
    return (
        <i-panel height="100%" width="100%" padding={{left: 10, right: 10, top: 10, bottom: 10}}>
            <i-switch id="switchBox"
                checkedThumbColor="#c5c5c5" uncheckedThumbColor="#070707"
                checkedThumbText="Off" uncheckedThumbText="On"
                checkedTrackColor="#070707" uncheckedTrackColor="#c5c5c5"
                checkedText="Off" uncheckedText="On"
                checked={true}
            ></i-switch>
        </i-panel>
    )
}
```
**Tip**: _The property `id` is inherited from [`Control`](components/Control/README.md)_

### Event
```typescript(components/Switch/samples/i-switch_2.tsx)
private label: Label;
private switchBox: Switch;

onChanged() {
    this.label.caption = `The switch is ${(this.switchBox.checked) ? 'On' : 'Off'}`;
}

render() {
    return (
        <i-panel height="100%" width="100%" padding={{left: 10, right: 10, top: 10, bottom: 10}}>
            <i-label id='label' caption="The switch is Off"></i-label>
            <i-switch id="switchBox"
                checkedTrackColor="#070707" uncheckedTrackColor="#c5c5c5"
                checkedThumbText="Off" uncheckedThumbText="On"
                checkedText="Off" uncheckedText="On"
                checked={true} onChanged={this.onChanged}
            ></i-switch>
        </i-panel>
    )
}
```
**Tip**: _The property `id` is inherited from [`Control`](components/Control/README.md)_