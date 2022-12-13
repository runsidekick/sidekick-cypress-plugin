interface CyApiOptions {
    api: ApiOptions
}

interface ApiOptions {
    displayRequest: boolean
}

interface Message {
    type: string
    namespace: string
    message: string
}

interface Messages {
    messages: Message[]
}


interface SidekickOptions {
    sidekickApiKey: string,
    sidekickApiToken: string,
    sidekickTestModeApiKey: string,
    sidekickTestModeHost: string,
    sidekickTestModePort: number
}

declare namespace Cypress {

    interface Chainable {
        getAllApplications<T> (params: any): Chainable<Response<T> & Messages>

        getAllTracepoints<T> (): Chainable<Response<T> & Messages>
        putTracepoint<T> (params: any): Chainable<Response<T> & Messages>
        removeTracepoint<T> (tracepointLocation: any): Chainable<Response<T> & Messages>
        disableTracepoint<T> (tracepointLocation: any): Chainable<Response<T> & Messages>
        enableTracepoint<T> (tracepointLocation: any): Chainable<Response<T> & Messages>

        getAllLogpoints<T> (): Chainable<Response<T> & Messages>
        putLogpoint<T> (params: any): Chainable<Response<T> & Messages>
        removeLogpoint<T> (logpointLocation: any): Chainable<Response<T> & Messages>
        disableLogpoint<T> (logpointLocation: any): Chainable<Response<T> & Messages>
        enableLogpoint<T> (logpointLocation: any): Chainable<Response<T> & Messages>

        getAllProbeTags<T> (): Chainable<Response<T> & Messages>
        disableProbeTag<T> (tag: string): Chainable<Response<T> & Messages>
        enableProbeTag<T> (tag: string): Chainable<Response<T> & Messages>

        tracepointReferenceEvent<T> (params: any): Chainable<Response<T> & Messages>
        logpointReferenceEvent<T> (params: any): Chainable<Response<T> & Messages>

        listEventHistory<T> (page:number, size:number, params: any): Chainable<Response<T> & Messages>

        // TEST MODE
        getTracePointEvents<T> (params: any): Chainable<Response<T> & Messages>
        getTracePointEventsByTag<T> (tag: string, params: any): Chainable<Response<T> & Messages>

        getLogPointEvents<T> (params: any): Chainable<Response<T> & Messages>
        getLogPointEventsByTag<T> (tag: string, params: any): Chainable<Response<T> & Messages>

        getErrorSnapshots<T> (appName: string): Chainable<Response<T> & Messages>

        flush<T> (eventType: string): Chainable<Response<T> & Messages>
        flushAll<T> (): Chainable<Response<T> & Messages>

        getReferenceEvent<T> (probeName: string, params: any): Chainable<Response<T> & Messages>
    }
  }