import { reduced, reduce, event, events } from "event-reduce";

@events
export class HelloWorldEvents {
    increment = event();
}

export class HelloWorldModel {
    public events = new HelloWorldEvents();

    @reduced
    count = reduce(1, this.events)
        .on(e => e.increment, (current, _) => ++current)
        .value;
}
