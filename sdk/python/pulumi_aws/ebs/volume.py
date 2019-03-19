# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Volume(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The volume ARN (e.g. arn:aws:ec2:us-east-1:0123456789012:volume/vol-59fcb34e).
    """
    availability_zone: pulumi.Output[str]
    """
    The AZ where the EBS volume will exist.
    """
    encrypted: pulumi.Output[bool]
    """
    If true, the disk will be encrypted.
    """
    iops: pulumi.Output[float]
    """
    The amount of IOPS to provision for the disk.
    """
    kms_key_id: pulumi.Output[str]
    """
    The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true.
    """
    size: pulumi.Output[float]
    """
    The size of the drive in GiBs.
    """
    snapshot_id: pulumi.Output[str]
    """
    A snapshot to base the EBS volume off of.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    type: pulumi.Output[str]
    """
    The type of EBS volume. Can be "standard", "gp2", "io1", "sc1" or "st1" (Default: "standard").
    """
    def __init__(__self__, resource_name, opts=None, availability_zone=None, encrypted=None, iops=None, kms_key_id=None, size=None, snapshot_id=None, tags=None, type=None, __name__=None, __opts__=None):
        """
        Manages a single EBS volume.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] availability_zone: The AZ where the EBS volume will exist.
        :param pulumi.Input[bool] encrypted: If true, the disk will be encrypted.
        :param pulumi.Input[float] iops: The amount of IOPS to provision for the disk.
        :param pulumi.Input[str] kms_key_id: The ARN for the KMS encryption key. When specifying `kms_key_id`, `encrypted` needs to be set to true.
        :param pulumi.Input[float] size: The size of the drive in GiBs.
        :param pulumi.Input[str] snapshot_id: A snapshot to base the EBS volume off of.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] type: The type of EBS volume. Can be "standard", "gp2", "io1", "sc1" or "st1" (Default: "standard").
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

        if availability_zone is None:
            raise TypeError('Missing required property availability_zone')
        __props__['availability_zone'] = availability_zone

        __props__['encrypted'] = encrypted

        __props__['iops'] = iops

        __props__['kms_key_id'] = kms_key_id

        __props__['size'] = size

        __props__['snapshot_id'] = snapshot_id

        __props__['tags'] = tags

        __props__['type'] = type

        __props__['arn'] = None

        super(Volume, __self__).__init__(
            'aws:ebs/volume:Volume',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

