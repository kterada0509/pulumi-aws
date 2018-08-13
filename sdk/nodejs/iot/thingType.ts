// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Creates and manages an AWS IoT Thing Type.
 */
export class ThingType extends pulumi.CustomResource {
    /**
     * Get an existing ThingType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ThingTypeState): ThingType {
        return new ThingType(name, <any>state, { id });
    }

    /**
     * The ARN of the created AWS IoT Thing Type.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Whether the thing type is deprecated. If true, no new things could be associated with this type.
     */
    public readonly deprecated: pulumi.Output<boolean | undefined>;
    /**
     * The name of the thing type.
     */
    public readonly name: pulumi.Output<string>;
    public readonly properties: pulumi.Output<{ description?: string, searchableAttributes: string[] } | undefined>;

    /**
     * Create a ThingType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ThingTypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ThingTypeArgs | ThingTypeState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ThingTypeState = argsOrState as ThingTypeState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["deprecated"] = state ? state.deprecated : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["properties"] = state ? state.properties : undefined;
        } else {
            const args = argsOrState as ThingTypeArgs | undefined;
            inputs["deprecated"] = args ? args.deprecated : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["properties"] = args ? args.properties : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:iot/thingType:ThingType", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ThingType resources.
 */
export interface ThingTypeState {
    /**
     * The ARN of the created AWS IoT Thing Type.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Whether the thing type is deprecated. If true, no new things could be associated with this type.
     */
    readonly deprecated?: pulumi.Input<boolean>;
    /**
     * The name of the thing type.
     */
    readonly name?: pulumi.Input<string>;
    readonly properties?: pulumi.Input<{ description?: pulumi.Input<string>, searchableAttributes?: pulumi.Input<pulumi.Input<string>[]> }>;
}

/**
 * The set of arguments for constructing a ThingType resource.
 */
export interface ThingTypeArgs {
    /**
     * Whether the thing type is deprecated. If true, no new things could be associated with this type.
     */
    readonly deprecated?: pulumi.Input<boolean>;
    /**
     * The name of the thing type.
     */
    readonly name?: pulumi.Input<string>;
    readonly properties?: pulumi.Input<{ description?: pulumi.Input<string>, searchableAttributes?: pulumi.Input<pulumi.Input<string>[]> }>;
}
