import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatusComponent", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"TEST STATUS"}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("TEST STATUS")
    })
    test("after creation span  should be displayed ", () => {
        const component = create(<ProfileStatus status={"TEST STATUS"}/>)
        const root = component.root
        const span = root.findByType("span")
        expect(span).not.toBeNull()
    })
    test("after creation input  should't be displayed ", () => {
        const component = create(<ProfileStatus status={"TEST STATUS"}/>)
        const root = component.root
        expect(() => {
            const input = root.findByType("input")
        }).toThrow()
    })
    test("after creation span  should contains correct status ", () => {
        const component = create(<ProfileStatus status={"TEST STATUS"}/>)
        const root = component.root
        const span = root.findByType("span")
        expect(span.children[0]).toBe("TEST STATUS")
    })
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={"TEST STATUS"}/>)
        const root = component.root
        const span = root.findByType("span")
        span.props.onDoubleClick()
        const input = root.findByType("input")
        expect(input.props.value).toBe("TEST STATUS")
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={"TEST STATUS"} updateStatus = {mockCallback}/>)
        const instance = component.getInstance()
        instance.deActivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})