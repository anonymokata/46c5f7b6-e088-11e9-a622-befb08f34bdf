import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";

import moment from "../../node_modules/moment";

import Babysitter from "../../src/components/Babysitter";

/**
 * Create wrapper object of the babysitter vue component.
 * @type {Wrapper<Vue>}
 *
 */
const babysitter = shallowMount(Babysitter);

const requestedStartTime = moment("17:00", "h:mma");
const requestedEndTime = moment("17:00", "h:mma").add(11, "hours");

describe("The babysitter", () => {
  it("should have a name.", () => {
    expect(babysitter.vm.getName())
      .to.be.a("string")
      .to.have.length.above(0);
  });

  it("starts no earlier than 5pm.", () => {
    expect(babysitter.vm.validateStartTime(requestedStartTime)).to.equal(
      "Start time is valid."
    );
  });

  it("leaves no later than 4am.", () => {
    expect(babysitter.vm.validateEndTime(requestedEndTime)).to.equal(
      "End time is valid."
    );
  });
});
