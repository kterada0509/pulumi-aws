# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class InstanceGroup(pulumi.CustomResource):
    cluster_id: pulumi.Output[str]
    """
    ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.
    """
    ebs_configs: pulumi.Output[list]
    """
    One or more `ebs_config` blocks as defined below. Changing this forces a new resource to be created.
    """
    ebs_optimized: pulumi.Output[bool]
    """
    Indicates whether an Amazon EBS volume is EBS-optimized. Changing this forces a new resource to be created.
    """
    instance_count: pulumi.Output[float]
    """
    Target number of instances for the instance group. Defaults to 0.
    """
    instance_type: pulumi.Output[str]
    """
    The EC2 instance type for all instances in the instance group. Changing this forces a new resource to be created.
    """
    name: pulumi.Output[str]
    """
    Human friendly name given to the instance group. Changing this forces a new resource to be created.
    """
    running_instance_count: pulumi.Output[float]
    status: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, cluster_id=None, ebs_configs=None, ebs_optimized=None, instance_count=None, instance_type=None, name=None, __name__=None, __opts__=None):
        """
        Provides an Elastic MapReduce Cluster Instance Group configuration.
        See [Amazon Elastic MapReduce Documentation](https://aws.amazon.com/documentation/emr/) for more information.
        
        > **NOTE:** At this time, Instance Groups cannot be destroyed through the API nor
        web interface. Instance Groups are destroyed when the EMR Cluster is destroyed.
        Terraform will resize any Instance Group to zero when destroying the resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] cluster_id: ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.
        :param pulumi.Input[list] ebs_configs: One or more `ebs_config` blocks as defined below. Changing this forces a new resource to be created.
        :param pulumi.Input[bool] ebs_optimized: Indicates whether an Amazon EBS volume is EBS-optimized. Changing this forces a new resource to be created.
        :param pulumi.Input[float] instance_count: Target number of instances for the instance group. Defaults to 0.
        :param pulumi.Input[str] instance_type: The EC2 instance type for all instances in the instance group. Changing this forces a new resource to be created.
        :param pulumi.Input[str] name: Human friendly name given to the instance group. Changing this forces a new resource to be created.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if cluster_id is None:
            raise TypeError('Missing required property cluster_id')
        __props__['cluster_id'] = cluster_id

        __props__['ebs_configs'] = ebs_configs

        __props__['ebs_optimized'] = ebs_optimized

        __props__['instance_count'] = instance_count

        if instance_type is None:
            raise TypeError('Missing required property instance_type')
        __props__['instance_type'] = instance_type

        __props__['name'] = name

        __props__['running_instance_count'] = None
        __props__['status'] = None

        super(InstanceGroup, __self__).__init__(
            'aws:emr/instanceGroup:InstanceGroup',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

